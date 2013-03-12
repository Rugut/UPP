Ext.define('Документы.РеестрСчетов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:616px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реестры счетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:600px;height:220px;',
			height: 220,width: 600,
			columns:
			[
				{
					text:' ',
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
					text:'Счет организации',
					width:'220',
				},
				{
					text:'Аккредитив',
					width:'80',
				},
				{
					text:'Юр физ лицо контрагента',
					width:'220',
				},
				{
					text:'Ответственный',
					width:'220',
				},
				{
					text:'Комментарий',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			items:
			[
				{
					text:'Печать по умолчанию',
				},
				'-',
			]
		},
	]
});