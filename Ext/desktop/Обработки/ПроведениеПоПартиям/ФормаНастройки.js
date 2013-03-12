Ext.define('Обработки.ПроведениеПоПартиям.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:241px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'checkbox',
			boxLabel: 'Останавливать проведение по партиям при нехватке партий',
			style: 'position:absolute;left:8px;top:193px;width:384px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:216px;width:400px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьМаксимальноеКоличествоСтрокВТранзакции',
			text: 'Количество строк в транзакции:',
			style: 'position:absolute;left:65px;top:112px;width:213px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксимальноеКоличествоСтрокВТранзакции',
			style: 'position:absolute;left:284px;top:112px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМаксимальноеКоличествоДокументовВВыборке',
			text: 'Количество документов в выборке:',
			style: 'position:absolute;left:65px;top:135px;width:213px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаксимальноеКоличествоДокументовВВыборке',
			style: 'position:absolute;left:284px;top:135px;width:94px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выполнять на сервере',
			style: 'position:absolute;left:65px;top:158px;width:313px;height:15px;',
		},
	]
});