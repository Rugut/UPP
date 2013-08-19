Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаОтображенияИнструкцииHTML',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:544px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Инструкция',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'button',
			name: 'КнопкаОК',
			text: 'Создать контейнер',
			style: 'position:absolute;left:768px;top:515px;width:115px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'РаспечататьИнструкцию',
			text: 'Распечатать инструкцию',
			style: 'position:absolute;left:184px;top:515px;width:164px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтмена',
			text: 'Отмена',
			style: 'position:absolute;left:892px;top:515px;width:99px;height:22px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'С инструкцией ознакомлен',
			style: 'position:absolute;left:8px;top:515px;width:166px;height:22px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:505px;width:984px;height:3px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовок',
			text: 'Перед отправкой заявления необходимо создать ключевой контейнер. Ниже приведена инструкция по его созданию. Ознакомьтесь с инструкцией и, при необходимости, распечатайте ее. Обратите внимание, в момент создания ключевого контейнера инструкция будет недоступна.',
			style: 'position:absolute;left:8px;top:4px;width:984px;height:36px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});