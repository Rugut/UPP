Ext.define('Обработки.АдреснаяКнига.ФормаРегистрацииНовогоОбъекта',
	{
	extend: 'Ext.window.Window',
	height: 164,width: 416,
	iconCls: 'bogus',
	title: 'Регистрация нового объекта',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:139px;width:416px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ЗарегистрироватьИОткрыть',
				},
				{
					text:'Зарегистрировать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеОбъекта',
			style: 'position:absolute;left:150px;top:56px;width:258px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидКонтактнойИнформации',
			style: 'position:absolute;left:150px;top:88px;width:258px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочты',
			style: 'position:absolute;left:150px;top:112px;width:258px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:400px;height:24px;',
			height: 24,width: 400,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентВладелец',
			style: 'position:absolute;left:142px;top:0px;width:258px;height:19px;',
		},
					]
				},
			]
		},
	]
});