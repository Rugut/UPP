Ext.define('Документы.ЗаявкаНаОткрытиеСчетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 647,
	iconCls: 'bogus',
	title: 'Заявка на открытие счетов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:86px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:186px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:86px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:419px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчет',
			style: 'position:absolute;left:419px;top:103px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДоговора',
			style: 'position:absolute;left:86px;top:129px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:86px;top:398px;width:553px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:244px;width:631px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'ПоказыватьВсеПоля',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:268px;width:631px;height:125px;',
			height: 125,width: 631,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'НомерЛицевогоСчета',
				},
				{
					text:'ЭмбоссированныйТекст',
				},
				{
					text:'ЭмбоссированныйТекст1',
				},
				{
					text:'ЭмбоссированныйТекст2',
				},
				{
					text:'ЭмбоссированныйТекст3',
				},
				{
					text:'Резидент',
				},
				{
					text:'Гражданство',
				},
				{
					text:'МиграционнаяКарта',
				},
				{
					text:'НомерМиграционнойКарты',
				},
				{
					text:'ДатаНачалаПребыванияМиграционнойКарты',
				},
				{
					text:'ДатаОкончанияПребыванияМиграционнойКарты',
				},
				{
					text:'МиграционныйДокумент',
				},
				{
					text:'КодМиграционногоДокумента',
				},
				{
					text:'НомерМиграционногоДокумента',
				},
				{
					text:'ДатаНачалаПребыванияМиграционногоДокумента',
				},
				{
					text:'ДатаОкончанияПребыванияМиграционногоДокумента',
				},
				{
					text:'КонтрольнаяИнформация',
				},
				{
					text:'Должность',
				},
				{
					text:'РабочийТелефон',
				},
				{
					text:'ДомашнийТелефон',
				},
				{
					text:'Сумма',
				},
				{
					text:'ПрогнозируемыйМесячныйДоход',
				},
				{
					text:'ПризнакЗарплатный',
				},
				{
					text:'КатегорияНаселения',
				},
				{
					text:'БонусУчастника',
				},
				{
					text:'ТарифСледующийГод',
				},
				{
					text:'ТарифТекущийГод',
				},
				{
					text:'БонусПрограмма',
				},
				{
					text:'ПризнакРассылки',
				},
				{
					text:'ИнтернетАдрес',
				},
				{
					text:'СчетДебета',
				},
				{
					text:'МобильныйТелефон',
				},
				{
					text:'ОператорСвязи',
				},
				{
					text:'МобильныйБанк',
				},
				{
					text:'ПередачаБКИ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:647px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Подменю',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ЛицевыеСчетаРаботниковОрганизации',
				},
				{
					text:'Подменю2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:647px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:86px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВида',
			style: 'position:absolute;left:78px;top:202px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПодВида',
			style: 'position:absolute;left:234px;top:202px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВалюты',
			style: 'position:absolute;left:234px;top:177px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидВкладаСтрокой',
			style: 'position:absolute;left:78px;top:177px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыплатыЗаработнойПлаты',
			style: 'position:absolute;left:504px;top:177px;width:49px;height:19px;',
		},
	]
});