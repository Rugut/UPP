Ext.define('Документы.ПереносПроводокМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 379,width: 654,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:327px;width:552px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:85px;width:468px;height:24px;',
			items:
			[
				{
					text:'УстановитьОтборИСортировкуСписка___',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВыполнитьПереносПроводок',
				},
				{
					text:'ВывестиСписок',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ОткрытьСоответствияСчетов',
				},
				{
					text:'ОткрытьИсключенияПроводок',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:354px;width:654px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:109px;width:638px;height:212px;',
			height: 212,width: 638,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'СчетДт',
				},
				{
					text:'ВалютаДт',
				},
				{
					text:'ВалютнаяСуммаДт',
				},
				{
					text:'КоличествоДт',
				},
				{
					text:'СубконтоДт1',
				},
				{
					text:'СубконтоДт2',
				},
				{
					text:'СубконтоДт3',
				},
				{
					text:'СчетКт',
				},
				{
					text:'СубконтоКт1',
				},
				{
					text:'СубконтоКт2',
				},
				{
					text:'СубконтоКт3',
				},
				{
					text:'ВалютаКт',
				},
				{
					text:'ВалютнаяСуммаКт',
				},
				{
					text:'КоличествоКт',
				},
				{
					text:'Сумма',
				},
				{
					text:'Содержание',
				},
				{
					text:'ПервичныйДокумент',
				},
				{
					text:'НомерЖурнала',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:426px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачало',
			style: 'position:absolute;left:426px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодКонец',
			style: 'position:absolute;left:533px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:625px;top:33px;width:19px;height:19px;',
		},
	]
});