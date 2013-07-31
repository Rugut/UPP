Ext.require(['Данные.Обработки.ОбновлениеИнформационнойБазы'], function () 
{
	Ext.define('Обработки.ОбновлениеИнформационнойБазы.ОбновлениеПроизвольныхОтчетов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:591px;height:166px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подготовка произвольных отчетов для использования в управляемом приложении',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Обработка выполняет обновление пользовательских настроек произвольных отчетов.\r\n\r\nВ пользовательские настройки добавляются:\r\n- Параметр "Период"\r\n- Параметры "Смещение периода", "Периодичность" (для показателей монитора эффективности)\r\n- Группировки\r\n- Отбор',
			style: 'position:absolute;left:8px;top:33px;width:575px;height:100px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:591px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:141px;width:591px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
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