Ext.define('Обработки.ПереходНаПорядокИсчисленияПособий2010.СписокСотрудников',
	{
	extend: 'Ext.window.Window',
	height: 370,width: 251,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:235px;height:354px;',
			height: 354,width: 235,
			items:
			[
				{
					title:'Отставники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:235px;height:354px;',
			height: 354,width: 235,
			columns:
			[
				{
					text:'ФизЛицо',
				},
			]
		},
					]
				},
				{
					title:'Облученные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:235px;height:354px;',
			height: 354,width: 235,
			columns:
			[
				{
					text:'ФизЛицо',
				},
			]
		},
					]
				},
			]
		},
	]
});