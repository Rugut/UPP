Ext.define('Обработки.ТОУправлениеЭквайринговойСистемой.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:274px;height:209px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Управление эквайринговой системой',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:274px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:184px;width:274px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'button',
			name: 'ВыполнитьСверкуИтогов',
			text: 'Выполнить сверку итогов по платежным картам',
			style: 'position:absolute;left:8px;top:152px;width:258px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'ОплатитьКартой',
			text: 'Оплатить картой',
			style: 'position:absolute;left:8px;top:53px;width:258px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'ОтменитьПлатежПоКарте',
			text: 'Отменить платеж по карте',
			style: 'position:absolute;left:8px;top:82px;width:258px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'ВернутьПлатежПоКарте',
			text: 'Вернуть платеж по карте',
			style: 'position:absolute;left:8px;top:111px;width:258px;height:24px;',
		},
	]
});