Ext.define('Обработки.АдреснаяКнига.ФормаРегистрацииНовогоОбъекта',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:164px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация нового объекта',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:8px;width:258px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип объекта регистрации:',
			style: 'position:absolute;left:8px;top:8px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование объекта:',
			style: 'position:absolute;left:8px;top:56px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеОбъекта',
			width: 258,
			height: 19,
			style: 'position:absolute;left:150px;top:56px;width:258px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Вид E-mail:',
			style: 'position:absolute;left:8px;top:88px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидКонтактнойИнформации',
			width: 258,
			height: 19,
			style: 'position:absolute;left:150px;top:88px;width:258px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'E-mail:',
			style: 'position:absolute;left:8px;top:112px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочты',
			width: 258,
			height: 19,
			style: 'position:absolute;left:150px;top:112px;width:258px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:400px;height:24px;',
			height: 24,width: 400,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'КонтрагентВладелец',
			width: 258,
			height: 19,
			style: 'position:absolute;left:142px;top:0px;width:258px;height:19px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:139px;width:416px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Зарегистрировать',
				},
				'-',
				{
					text:'Зарегистрировать и открыть объект',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});