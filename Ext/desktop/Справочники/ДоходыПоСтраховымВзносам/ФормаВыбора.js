Ext.define('Справочники.ДоходыПоСтраховымВзносам.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 426,width: 766,
	iconCls: 'bogus',
	title: 'Способы учета доходов сотрудников при исчислении страховых взносов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:750px;height:340px;',
			height: 340,width: 750,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:766px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});