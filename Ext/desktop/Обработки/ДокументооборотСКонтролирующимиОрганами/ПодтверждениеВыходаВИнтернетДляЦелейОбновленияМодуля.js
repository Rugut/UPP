Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПодтверждениеВыходаВИнтернетДляЦелейОбновленияМодуля',
	{
	extend: 'Ext.window.Window',
	height: 232,width: 545,
	iconCls: 'bogus',
	title: 'Обновление модуля документооборота с контролирующими органами',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:199px;width:529px;height:25px;',
			height: 25,width: 529,
			items:
			[
				{
					title:'ЖесткаяБлокировка',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаРазрешить',
			text: 'Разрешить (рекомендуется)',
			style: 'position:absolute;left:0px;top:0px;width:256px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗапретить',
			text: 'Запретить',
			style: 'position:absolute;left:269px;top:0px;width:124px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНапомнитьПозже',
			text: 'Напомнить позже',
			style: 'position:absolute;left:405px;top:0px;width:124px;height:25px;',
		},
					]
				},
			]
		},
	]
});