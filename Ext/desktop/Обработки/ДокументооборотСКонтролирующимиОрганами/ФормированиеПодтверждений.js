Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормированиеПодтверждений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:742px;height:518px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование подтверждений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:493px;width:742px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Выполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:106px;width:726px;height:379px;',
			height: 379,width: 726,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'35',
				},
				{
					text:'',
					width:'34',
				},
				{
					text:'',
					width:'34',
				},
				{
					text:'',
					width:'34',
				},
				{
					text:'Тип',
					width:'78',
				},
				{
					text:'Наименование',
					width:'81',
				},
				{
					text:'Дата создания',
					width:'126',
				},
				{
					text:'Дата завершения',
					width:'100',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Налоговый орган',
					width:'120',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:8px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:142px;top:8px;width:592px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидыЦикловОбмена',
			text: 'Типы циклов обмена:',
			style: 'position:absolute;left:8px;top:35px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЦиклаОбмена',
			style: 'position:absolute;left:296px;top:35px;width:438px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Без учета завершенных циклов обмена',
			style: 'position:absolute;left:509px;top:61px;width:225px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:82px;width:726px;height:24px;',
			items:
			[
				'-',
				{
					text:'Пометить все',
				},
				{
					text:'Снять флажки у всех',
				},
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать подтверждения на нераспакованные сообщения',
			style: 'position:absolute;left:142px;top:61px;width:359px;height:15px;',
		},
	]
});