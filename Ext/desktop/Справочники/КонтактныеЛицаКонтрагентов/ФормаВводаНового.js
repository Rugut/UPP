Ext.define('Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНового',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:533px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контактные лица контрагентов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:137px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:98px;top:137px;width:427px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность',
			text: 'Должность:',
			style: 'position:absolute;left:8px;top:162px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность',
			style: 'position:absolute;left:98px;top:162px;width:427px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:368px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:368px;width:427px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРольКонтактногоЛица',
			text: 'Роль:',
			style: 'position:absolute;left:8px;top:187px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РольКонтактногоЛица',
			style: 'position:absolute;left:98px;top:187px;width:427px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:395px;width:533px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьФИО',
			text: 'Фамилия И.О.:',
			style: 'position:absolute;left:8px;top:8px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:98px;top:8px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:235px;top:8px;width:127px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:365px;top:8px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидТелефонаКонтактногоЛица',
			style: 'position:absolute;left:98px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Код:',
			style: 'position:absolute;left:201px;top:241px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодГородаТелефонаКонтактногоЛица',
			style: 'position:absolute;left:240px;top:241px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Номер:',
			style: 'position:absolute;left:287px;top:241px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерТелефонаКонтактногоЛица',
			style: 'position:absolute;left:333px;top:241px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Доб.:',
			style: 'position:absolute;left:418px;top:241px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДобавочныйНомерТелефонаКонтактногоЛица',
			style: 'position:absolute;left:458px;top:241px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЭлектроннойПочтыКонтактногоЛица',
			style: 'position:absolute;left:98px;top:314px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Адрес:',
			style: 'position:absolute;left:201px;top:314px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыКонтактногоЛица',
			style: 'position:absolute;left:240px;top:314px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:8px;top:60px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:98px;top:60px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУдостоверение',
			text: 'Удостоверение:',
			style: 'position:absolute;left:201px;top:84px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Удостоверение',
			style: 'position:absolute;left:293px;top:84px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:8px;top:84px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:98px;top:84px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Напоминать о дне рождения за:',
			style: 'position:absolute;left:202px;top:59px;width:184px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДнейДоНапоминания',
			style: 'position:absolute;left:392px;top:59px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:438px;top:59px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЭлектроннойПочтыКонтактногоЛица2',
			style: 'position:absolute;left:98px;top:339px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Адрес:',
			style: 'position:absolute;left:201px;top:339px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыКонтактногоЛица2',
			style: 'position:absolute;left:240px;top:339px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидТелефонаКонтактногоЛица2',
			style: 'position:absolute;left:98px;top:267px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Код:',
			style: 'position:absolute;left:201px;top:267px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодГородаТелефонаКонтактногоЛица2',
			style: 'position:absolute;left:240px;top:267px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Номер:',
			style: 'position:absolute;left:287px;top:267px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерТелефонаКонтактногоЛица2',
			style: 'position:absolute;left:333px;top:267px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Доб.:',
			style: 'position:absolute;left:418px;top:267px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДобавочныйНомерТелефонаКонтактногоЛица2',
			style: 'position:absolute;left:458px;top:267px;width:42px;height:19px;',
		},
	]
});