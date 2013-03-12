Ext.define('Документы.Опрос.ФормаВводаОстальныхОтветов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:915px;height:290px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ответ',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:10px;width:899px;height:249px;',
			height: 249,width: 899,
			items:
			[
				{
					title:'Несколько вариантов ответа',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:899px;height:249px;',
			height: 249,width: 899,
			columns:
			[
				{
					text:'',
					width:'25',
				},
				{
					text:'№',
					width:'35',
				},
				{
					text:'Составной ответ',
					width:'204',
				},
				{
					text:'Развернутый ответ',
					width:'200',
				},
			]
		},
					]
				},
				{
					title:'Табличный',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:899px;height:249px;',
			height: 249,width: 899,
			columns:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:265px;width:915px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
});