Ext.define('Справочники.ВидыДеятельностиКонтрагентов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 780,
	iconCls: 'bogus',
	title: 'Справочник Виды деятельности контрагентов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:598px;height:320px;',
			height: 320,width: 598,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
	]
});