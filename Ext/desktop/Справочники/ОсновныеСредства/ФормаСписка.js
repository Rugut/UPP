Ext.define('Справочники.ОсновныеСредства.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 677,
	iconCls: 'bogus',
	title: 'Основные средства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:495px;height:320px;',
			height: 320,width: 495,
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
					text:'Изготовитель',
				},
				{
					text:'НомерПаспорта',
				},
				{
					text:'ЗаводскойНомер',
				},
				{
					text:'ДатаВыпуска',
				},
				{
					text:'КодПоОКОФ',
				},
				{
					text:'АмортизационнаяГруппа',
				},
				{
					text:'ГруппаОС',
				},
				{
					text:'Автотранспорт',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:677px;height:25px;',
			items:
			[
				{
					text:'Подменю4',
				},
				{
					text:'ДействиеСвойства',
				},
				{
					text:'ДействиеКатегории',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ГрупповойВвод',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
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