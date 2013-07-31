Ext.require(['Данные.Обработки.ТОУправлениеЭквайринговойСистемой'], function () 
{
	Ext.define('Обработки.ТОУправлениеЭквайринговойСистемой.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:274px;height:209px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Управление эквайринговой системой',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'button',
			name: 'ВыполнитьСверкуИтогов',
			text: 'Выполнить сверку итогов по платежным картам',
			style: 'position:absolute;left:8px;top:152px;width:258px;height:24px;',
		},
		{
			xtype: 'fieldset',
			title: 'Операции',
			style: 'position:absolute;left:8px;top:33px;width:258px;height:16px;',
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
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:274px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:184px;width:274px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});