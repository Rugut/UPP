Ext.define('Документы.СведенияОДоходахФизлиц.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 630,
	iconCls: 'bogus',
	title: 'Сведения о доходах физических лиц для ИФНС',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:630px;height:25px;',
			items:
			[
				{
					text:'НаДискетку',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РазделительПечать',
				},
				{
					text:'Записать',
				},
				{
					text:'Файл',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:527px;width:526px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:239px;width:614px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Подбор',
				},
				{
					text:'РазделительПечать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеПронумеровать',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:263px;width:614px;height:259px;',
			height: 259,width: 614,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'НомерСправки',
				},
				{
					text:'Ставка',
				},
				{
					text:'КодПоОКАТО',
				},
				{
					text:'КПП',
				},
				{
					text:'ПереданоНаВзыскание',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:437px;top:57px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтактныйТелефонОтветственного',
			style: 'position:absolute;left:437px;top:105px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьОтветственного',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторФайла',
			style: 'position:absolute;left:267px;top:152px;width:252px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьИдентификаторФайла',
			text: '',
			style: 'position:absolute;left:519px;top:152px;width:22px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:630px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
			]
		},
	]
});