Ext.define('Документы.ЗапросВПФРОЗаработкеСотрудника.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 535,width: 682,
	iconCls: 'bogus',
	title: 'Запрос в ПФР о заработке сотрудника',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:682px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие7',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:510px;width:682px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:454px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:554px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:93px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:454px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:93px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:483px;width:578px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:93px;top:161px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:454px;top:161px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			style: 'position:absolute;left:254px;top:136px;width:420px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Адрес',
			style: 'position:absolute;left:93px;top:344px;width:581px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСтрахователя',
			text: 'Обновить',
			style: 'position:absolute;left:8px;top:237px;width:82px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:8px;top:449px;width:82px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресОрганизации',
			style: 'position:absolute;left:93px;top:186px;width:581px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:93px;top:293px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:293px;top:293px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:514px;top:293px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:357px;top:318px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:93px;top:318px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:93px;top:398px;width:256px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:400px;top:398px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:578px;top:398px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиДокумента',
			style: 'position:absolute;left:578px;top:423px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КемВыданДокумент',
			style: 'position:absolute;left:93px;top:423px;width:403px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТелефонОрганизации',
			style: 'position:absolute;left:94px;top:211px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Страхователь',
			style: 'position:absolute;left:93px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодС',
			style: 'position:absolute;left:485px;top:83px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодПо',
			style: 'position:absolute;left:594px;top:83px;width:80px;height:19px;',
		},
	]
});