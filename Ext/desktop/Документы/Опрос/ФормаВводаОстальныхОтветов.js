Ext.define('Документы.Опрос.ФормаВводаОстальныхОтветов',
	{
	extend: 'Ext.window.Window',
	height: 290,width: 915,
	iconCls: 'bogus',
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
					title:'НесколькоВариантовОтвета',
				},
				{
					title:'Табличный',
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
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});