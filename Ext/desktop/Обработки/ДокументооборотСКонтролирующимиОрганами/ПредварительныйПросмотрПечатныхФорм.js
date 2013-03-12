Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПредварительныйПросмотрПечатныхФорм',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:740px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Печать документов циклов обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:740px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
				{
					text:'В формате табличных документов (MXL)',
				},
				{
					text:'В формате Microsoft Excel (XLS)',
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:53px;width:198px;height:319px;',
			height: 319,width: 198,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Объект',
					width:'159',
				},
				{
					text:'Табличный документ',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:25px;width:198px;height:24px;',
			items:
			[
				{
					text:'Переместить вниз',
				},
				{
					text:'Раскрыть',
				},
				{
					text:'Установить пометки',
				},
				{
					text:'Переместить вверх',
				},
				{
					text:'Свернуть',
				},
				'-',
				{
					text:'Снять пометки',
				},
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоКопий',
			style: 'position:absolute;left:160px;top:398px;width:46px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоКопий',
			text: 'Количество копий:',
			style: 'position:absolute;left:14px;top:399px;width:100px;height:18px;',
		},
	]
});