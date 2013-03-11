Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.ПодтверждениеВыходаВИнтернет',
	{
	extend: 'Ext.window.Window',
	height: 312,width: 658,
	iconCls: 'bogus',
	title: 'Использование сведений из Интернет',
	
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
	]
});