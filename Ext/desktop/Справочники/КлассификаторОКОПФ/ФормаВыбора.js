Ext.define('Справочники.КлассификаторОКОПФ.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 536,
	iconCls: 'bogus',
	title: 'Справочник Классификатор ОКОПФ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:520px;height:280px;',
			height: 280,width: 520,
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
				{
					text:'НаименованиеПолное',
				},
				{
					text:'БыстрыйВыбор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:536px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подбор',
				},
			]
		},
	]
});