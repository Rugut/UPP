Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВыбораВидаОтчета',
	{
	extend: 'Ext.window.Window',
	height: 406,width: 537,
	iconCls: 'bogus',
	title: 'Выберите вид отчета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:521px;height:283px;',
			height: 283,width: 521,
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
			style: 'position:absolute;left:0px;top:0px;width:537px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие11',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'ПодробнееОФормах',
				},
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
					text:'Разделитель4',
				},
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие10',
				},
			]
		},
	]
});