'use client'

import { useEffect } from 'react'

import { ISummary } from 'shared/lib/waka/types'

import axios from 'axios'

export const Info = ({ summary }: { summary?: ISummary }) => {
	return (
		<div className={'col'}>
			{/*{data.projects.map(({ hours, minutes, name, seconds }) => (*/}
			{/*	<div className={'row'} key={name}>*/}
			{/*		<span>{name}</span>*/}
			{/*		<span>{`${hours}:${minutes}:${seconds}`}</span>*/}
			{/*	</div>*/}
			{/*))}*/}
		</div>
	)
}

// notion 1 2 3

// waka 1 2 3 4

// filter waka
// Todo
// set ? add in notionSet notion id and iterate waka and check id in notionSet
// if true = skip else create notion page
