Ext.define('Справочники.ДоходыПоСтраховымВзносам.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:766px;height:426px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'220',
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
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВидаДохода',
			text: '',
			style: 'position:absolute;left:8px;top:379px;width:750px;height:39px;',
		},
	]
});