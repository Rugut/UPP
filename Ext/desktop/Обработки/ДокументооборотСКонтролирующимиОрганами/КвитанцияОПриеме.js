Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.КвитанцияОПриеме',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:563px;height:411px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Квитанция о приеме',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:386px;width:563px;height:25px;',
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
			style: 'position:absolute;left:193px;top:47px;width:362px;height:19px;',
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
			style: 'position:absolute;left:193px;top:73px;width:362px;height:19px;',
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
			style: 'position:absolute;left:193px;top:99px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата и время представления:',
			style: 'position:absolute;left:8px;top:124px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВремяПредст',
			style: 'position:absolute;left:193px;top:125px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата поступления отчета:',
			style: 'position:absolute;left:8px;top:280px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПост',
			style: 'position:absolute;left:193px;top:281px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Код формы по КНД:',
			style: 'position:absolute;left:8px;top:150px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:193px;top:151px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Наименование формы:',
			style: 'position:absolute;left:8px;top:176px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимОтч',
			style: 'position:absolute;left:193px;top:177px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Номер корректировки:',
			style: 'position:absolute;left:8px;top:202px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомКорр',
			style: 'position:absolute;left:193px;top:203px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Отчетный год:',
			style: 'position:absolute;left:8px;top:254px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетГод',
			style: 'position:absolute;left:193px;top:255px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Отчетный период:',
			style: 'position:absolute;left:8px;top:228px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:193px;top:229px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Рег. номер отчетности в НО:',
			style: 'position:absolute;left:8px;top:332px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегНом',
			style: 'position:absolute;left:193px;top:333px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Проверившая программа:',
			style: 'position:absolute;left:8px;top:358px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрогрКомпл',
			style: 'position:absolute;left:193px;top:359px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Дата принятия отчета:',
			style: 'position:absolute;left:8px;top:306px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПрин',
			style: 'position:absolute;left:193px;top:307px;width:362px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Налоговый орган:',
			style: 'position:absolute;left:8px;top:8px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйОрган',
			style: 'position:absolute;left:193px;top:9px;width:362px;height:19px;',
		},
	]
});