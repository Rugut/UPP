Ext.define('Отчеты.ВзаиморасчетыСКомитентами.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:399px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:374px;width:620px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:6px;width:604px;height:360px;',
			height: 360,width: 604,
			items:
			[
				{
					title:'Основные параметры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:73px;width:336px;height:261px;',
			height: 261,width: 336,
			columns:
			[
				{
					text:'Группировка',
					width:'158',
				},
				{
					text:'Тип итога',
					width:'59',
				},
				{
					text:'Дополнительные поля',
					width:'147',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:49px;width:336px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Из списка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:65px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:150px;top:6px;width:15px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонца',
			style: 'position:absolute;left:171px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:346px;top:73px;width:250px;height:261px;',
			height: 261,width: 250,
			columns:
			[
				{
					text:'',
					width:'23',
				},
				{
					text:'Показатель',
					width:'177',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:346px;top:49px;width:250px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать группировки',
			style: 'position:absolute;left:434px;top:9px;width:162px;height:16px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:254px;top:6px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:386px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:386px;height:304px;',
			height: 304,width: 386,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Поле',
					width:'103',
				},
				{
					text:'Вид сравнения',
					width:'76',
				},
				{
					text:'Значение',
					width:'163',
				},
			]
		},
					]
				},
			]
		},
	]
});