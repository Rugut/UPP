Ext.define('Справочники.ОсновныеСредства.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 602,
	iconCls: 'bogus',
	title: 'Основные средства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:420px;height:320px;',
			height: 320,width: 420,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:602px;height:25px;',
			items:
			[
				{
					text:'ГрупповоеДобавление',
				},
				{
					text:'Разделитель7',
				},
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