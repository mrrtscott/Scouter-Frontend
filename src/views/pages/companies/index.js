import React, { useEffect, useState } from 'react';
import CompanyCard from '../../components/company_card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaAngleLeft as Back } from 'react-icons/fa';
import Nav from '../../components/Nav';

export default function CompaniesPage({ companies }) {
  return (
    <>
      <Nav />
      <div className={'container mx-auto'}>
        <Link
          to={{
            pathname: `/admin`,
          }}
        >
          <div className="flex items-center mt-4">
            <Back />
            <a>Back</a>
          </div>
        </Link>
        <h2 className={'text-3xl text-gray-700 font-bold my-10'}>
          List of Companies
        </h2>

        {companies.map((company) => {
          return <CompanyCard key={company.id} company={company} />;
        })}
      </div>
    </>
  );
}
