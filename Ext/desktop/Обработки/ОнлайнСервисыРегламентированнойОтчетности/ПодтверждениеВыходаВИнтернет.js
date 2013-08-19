Ext.require(['Данные.Обработки.ОнлайнСервисыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.ПодтверждениеВыходаВИнтернет',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:658px;height:312px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Использование сведений из Интернет',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'button',
			name: 'КнопкаРазрешить',
			text: 'Разрешить (рекомендуется)         ',
			style: 'position:absolute;left:8px;top:189px;width:642px;height:44px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНапомнитьПозже',
			text: 'Напомнить позже',
			style: 'position:absolute;left:8px;top:241px;width:642px;height:28px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗапретить',
			text: 'Запретить',
			style: 'position:absolute;left:8px;top:277px;width:642px;height:27px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});