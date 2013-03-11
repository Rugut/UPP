Ext.define('Справочники.РегламентированныеОтчеты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 390,width: 677,
	iconCls: 'bogus',
	title: 'Регламентированные отчеты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:200px;top:33px;width:469px;height:280px;',
			height: 280,width: 469,
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:186px;height:280px;',
			height: 280,width: 186,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:677px;height:25px;',
			items:
			[
				{
					text:'КоманднаяПанельПереместитьВниз',
				},
				{
					text:'ИерархическийПросмотр',
				},
				{
					text:'Журнал',
				},
				{
					text:'Разделитель',
				},
				{
					text:'КоманднаяПанельПоказатьСкрытые',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'КоманднаяПанельОбновить',
				},
				{
					text:'КоманднаяПанельСкрыть',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ПереместитьВгруппу',
				},
				{
					text:'КоманднаяПанельОткрытьОтчет',
				},
				{
					text:'Изменить',
				},
				{
					text:'КоманднаяПанельПереместитьВверх',
				},
				{
					text:'ПодробнееОФормах',
				},
				{
					text:'Удалить',
				},
				{
					text:'Добавить',
				},
				{
					text:'НайтиВдереве',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'НоваяГруппа',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель2',
				},
			]
		},
	]
});