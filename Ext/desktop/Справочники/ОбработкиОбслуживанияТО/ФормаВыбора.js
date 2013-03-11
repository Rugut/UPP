Ext.define('Справочники.ОбработкиОбслуживанияТО.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 600,
	iconCls: 'bogus',
	title: 'Справочник Обработки обслуживания торгового оборудования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:259px;',
			height: 259,width: 584,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Вид',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
				{
					text:'Подменю3',
				},
				{
					text:'Действие',
				},
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель5',
				},
			]
		},
	]
});