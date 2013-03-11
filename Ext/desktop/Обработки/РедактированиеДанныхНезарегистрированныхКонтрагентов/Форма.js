Ext.define('Обработки.РедактированиеДанныхНезарегистрированныхКонтрагентов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 370,width: 548,
	iconCls: 'bogus',
	title: 'Регистрация данных нового клиента',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:548px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:345px;width:548px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Зарегистрировать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительЗарегистрировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеКонтрагента',
			style: 'position:absolute;left:128px;top:33px;width:412px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЮрФизЛицо',
			style: 'position:absolute;left:128px;top:58px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойВидДеятельностиКонтрагента',
			style: 'position:absolute;left:128px;top:129px;width:412px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеКонтрагентаПолное',
			style: 'position:absolute;left:128px;top:106px;width:412px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:154px;width:532px;height:183px;',
			height: 183,width: 532,
			items:
			[
				{
					title:'Контрагент',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительноеОписание',
			style: 'position:absolute;left:89px;top:138px;width:435px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидТелефонаКонтрагента',
			style: 'position:absolute;left:60px;top:10px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодГородаТелефонаКонтрагента',
			style: 'position:absolute;left:204px;top:10px;width:39px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерТелефонаКонтрагента',
			style: 'position:absolute;left:293px;top:10px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДобавочныйНомерТелефонаКонтрагента',
			style: 'position:absolute;left:419px;top:10px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидАдресаКонтрагента',
			style: 'position:absolute;left:60px;top:38px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГородКонтрагента',
			style: 'position:absolute;left:204px;top:38px;width:320px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УлицаКонтрагента',
			style: 'position:absolute;left:204px;top:62px;width:320px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДомКонтрагента',
			style: 'position:absolute;left:204px;top:86px;width:38px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КорпусКонтрагента',
			style: 'position:absolute;left:293px;top:86px;width:39px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЭлектроннойПочтыКонтрагента',
			style: 'position:absolute;left:60px;top:112px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыКонтрагента',
			style: 'position:absolute;left:204px;top:112px;width:320px;height:19px;',
		},
					]
				},
				{
					title:'КонтактноеЛицо',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФИОКонтактногоЛица',
			style: 'position:absolute;left:123px;top:34px;width:401px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидТелефонаКонтактногоЛица',
			style: 'position:absolute;left:123px;top:90px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодГородаТелефонаКонтактногоЛица',
			style: 'position:absolute;left:264px;top:90px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерТелефонаКонтактногоЛица',
			style: 'position:absolute;left:357px;top:90px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДобавочныйНомерТелефонаКонтактногоЛица',
			style: 'position:absolute;left:482px;top:90px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЭлектроннойПочтыКонтактногоЛица',
			style: 'position:absolute;left:123px;top:115px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыКонтактногоЛица',
			style: 'position:absolute;left:264px;top:115px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьКонтактногоЛица',
			style: 'position:absolute;left:123px;top:58px;width:401px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяКонтактногоЛица',
			style: 'position:absolute;left:273px;top:10px;width:121px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчествоКонтактногоЛица',
			style: 'position:absolute;left:399px;top:10px;width:125px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФамилияКонтактногоЛица',
			style: 'position:absolute;left:123px;top:10px;width:145px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:345px;width:548px;height:25px;',
			items:
			[
				{
					text:'ЗарегистрироватьИОткрыть',
				},
				{
					text:'Действие1',
				},
				{
					text:'Зарегистрировать',
				},
				{
					text:'РазделительЗарегистрировать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОКОПФ',
			style: 'position:absolute;left:128px;top:82px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН1',
			style: 'position:absolute;left:313px;top:82px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:461px;top:82px;width:62px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаГенарацииКПП',
			text: '',
			style: 'position:absolute;left:399px;top:82px;width:20px;height:19px;',
		},
	]
});