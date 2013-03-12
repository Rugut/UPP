Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ИзвещениеОВводе',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:563px;height:280px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Извещение о вводе',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:255px;width:563px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя обработанного файла:',
			style: 'position:absolute;left:8px;top:46px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяОбрабФайла',
			style: 'position:absolute;left:193px;top:46px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Идентификатор файла:',
			style: 'position:absolute;left:8px;top:72px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдФайл',
			style: 'position:absolute;left:193px;top:72px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Идентификатор документа:',
			style: 'position:absolute;left:8px;top:98px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдДок',
			style: 'position:absolute;left:193px;top:98px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Код формы по КНД:',
			style: 'position:absolute;left:8px;top:124px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:193px;top:124px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Наименование формы:',
			style: 'position:absolute;left:8px;top:150px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимОтч',
			style: 'position:absolute;left:193px;top:150px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Номер корректировки:',
			style: 'position:absolute;left:8px;top:176px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомКорр',
			style: 'position:absolute;left:193px;top:176px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Отчетный год:',
			style: 'position:absolute;left:8px;top:228px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетГод',
			style: 'position:absolute;left:193px;top:228px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Отчетный период:',
			style: 'position:absolute;left:8px;top:202px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:193px;top:202px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'НО, подтверждающий ввод отчета:',
			style: 'position:absolute;left:8px;top:8px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйОрган',
			style: 'position:absolute;left:193px;top:8px;width:362px;height:19px;',
		},
	]
});