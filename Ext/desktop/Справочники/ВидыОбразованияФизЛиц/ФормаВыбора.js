Ext.define('Справочники.ВидыОбразованияФизЛиц.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 524,
	iconCls: 'bogus',
	title: 'Виды образования физических лиц',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:508px;height:280px;',
			height: 280,width: 508,
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
			style: 'position:absolute;left:0px;top:0px;width:524px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ДействиеПодбор',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});