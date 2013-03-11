Ext.define('Справочники.Контрагенты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 684,
	iconCls: 'bogus',
	title: 'Контрагенты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:684px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОтборПоМенеджеру',
				},
				{
					text:'Выбрать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:668px;height:280px;',
			height: 280,width: 668,
			items:
			[
				{
					title:'СписокВыбора',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:166px;top:24px;width:502px;height:256px;',
			height: 256,width: 502,
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
					text:'ИНН',
				},
				{
					text:'НаименованиеПолное',
				},
				{
					text:'Комментарий',
				},
				{
					text:'ОсновнойМенеджерПокупателя',
				},
				{
					text:'ГоловнойКонтрагент',
				},
				{
					text:'ДокументУдостоверяющийЛичность',
				},
				{
					text:'ДополнительноеОписание',
				},
				{
					text:'ИсточникИнформацииПриОбращении',
				},
				{
					text:'КодПоОКПО',
				},
				{
					text:'КПП',
				},
				{
					text:'НеЯвляетсяРезидентом',
				},
				{
					text:'ОКОПФ',
				},
				{
					text:'ОсновноеКонтактноеЛицо',
				},
				{
					text:'ОсновнойБанковскийСчет',
				},
				{
					text:'ОсновнойВидДеятельности',
				},
				{
					text:'ОсновнойДоговорКонтрагента',
				},
				{
					text:'Покупатель',
				},
				{
					text:'Поставщик',
				},
				{
					text:'РасписаниеРаботыСтрокой',
				},
				{
					text:'Регион',
				},
				{
					text:'СрокВыполненияЗаказаПоставщиком',
				},
				{
					text:'ЮрФизЛицо',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:160px;height:256px;',
			height: 256,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗначениеОтбораСпискаКонтрагентов',
			style: 'position:absolute;left:226px;top:0px;width:442px;height:19px;',
		},
					]
				},
				{
					title:'СписокВыбораПоПользователю',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:280px;',
			height: 280,width: 668,
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
					text:'Комментарий',
				},
			]
		},
					]
				},
			]
		},
	]
});