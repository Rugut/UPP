Ext.define('Документы.РеестрСчетов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реестры счетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:259px;',
			height: 259,width: 584,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Дата',
					width:'80',
				},
				{
					text:'Номер',
					width:'132',
				},
				{
					text:'Организация',
					width:'220',
				},
				{
					text:'Номер аккредитива',
					width:'110',
				},
				{
					text:'Дата аккредитива',
					width:'79',
				},
				{
					text:'Счет организации',
					width:'191',
				},
				{
					text:'Юр физ лицо контрагента',
					width:'220',
				},
				{
					text:'Сумма аккредитива',
					width:'80',
				},
				{
					text:'Дата закрытия',
					width:'79',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});