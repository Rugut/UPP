Ext.define('Справочники.ВидыКонтактнойИнформации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 496,
	iconCls: 'bogus',
	title: 'Виды контактной информации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:480px;height:280px;',
			height: 280,width: 480,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Тип',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВидОбъектаКонтактнойИнформации',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:496px;height:25px;',
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