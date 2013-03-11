Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_СерверыДокументооборота_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 266,width: 554,
	iconCls: 'bogus',
	title: 'Серверы документооборота',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:208px;top:33px;width:63px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:208px;top:58px;width:338px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочты',
			style: 'position:absolute;left:208px;top:164px;width:338px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДлительностьОжиданияСервера',
			style: 'position:absolute;left:208px;top:109px;width:63px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:554px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:241px;width:554px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сертификат',
			style: 'position:absolute;left:208px;top:83px;width:338px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыПФР',
			style: 'position:absolute;left:208px;top:189px;width:338px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыФСГС',
			style: 'position:absolute;left:208px;top:214px;width:338px;height:19px;',
		},
	]
});