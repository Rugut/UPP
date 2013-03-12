Ext.define('Обработки.ОбновлениеИнформационнойБазы.ОбновлениеПроизвольныхОтчетов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:591px;height:166px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подготовка произвольных отчетов для использования в управляемом приложении',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:591px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:141px;width:591px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Обработка выполняет обновление пользовательских настроек произвольных отчетов.

В пользовательские настройки добавляются:
- Параметр "Период"
- Параметры "Смещение периода", "Периодичность" (для показателей монитора эффективности)
- Группировки
- Отбор',
			style: 'position:absolute;left:8px;top:33px;width:575px;height:100px;',
		},
	]
});