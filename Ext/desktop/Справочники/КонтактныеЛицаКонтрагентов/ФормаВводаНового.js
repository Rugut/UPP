Ext.define('Справочники.КонтактныеЛицаКонтрагентов.ФормаВводаНового',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 533,
	iconCls: 'bogus',
	title: 'Контактные лица контрагентов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:98px;top:137px;width:427px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность',
			style: 'position:absolute;left:98px;top:162px;width:427px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:368px;width:427px;height:19px;',
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
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодГородаТелефонаКонтактногоЛица',
			style: 'position:absolute;left:240px;top:241px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерТелефонаКонтактногоЛица',
			style: 'position:absolute;left:333px;top:241px;width:80px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыКонтактногоЛица',
			style: 'position:absolute;left:240px;top:314px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:98px;top:60px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Удостоверение',
			style: 'position:absolute;left:293px;top:84px;width:232px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:98px;top:84px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДнейДоНапоминания',
			style: 'position:absolute;left:392px;top:59px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЭлектроннойПочтыКонтактногоЛица2',
			style: 'position:absolute;left:98px;top:339px;width:80px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодГородаТелефонаКонтактногоЛица2',
			style: 'position:absolute;left:240px;top:267px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерТелефонаКонтактногоЛица2',
			style: 'position:absolute;left:333px;top:267px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДобавочныйНомерТелефонаКонтактногоЛица2',
			style: 'position:absolute;left:458px;top:267px;width:42px;height:19px;',
		},
	]
});