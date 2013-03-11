Ext.define('Обработки.ТОНастройка.ФормаСпискаДоступныхОбработок',
	{
	extend: 'Ext.window.Window',
	height: 261,width: 957,
	iconCls: 'bogus',
	title: 'Список доступных обработок обслуживания',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:236px;width:957px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыОтмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:941px;height:220px;',
			height: 220,width: 941,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'Описание',
				},
				{
					text:'Версия',
				},
				{
					text:'ВерсияAPI',
				},
			]
		},
	]
});