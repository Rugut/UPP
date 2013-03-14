Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ДокументыРеализацииПолномочийНалоговыхОрганов_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:810px;height:404px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ реализации полномочий налоговых органов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:8px;top:77px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйОрган',
			text: 'Налоговый орган:',
			style: 'position:absolute;left:8px;top:153px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:178px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер документа:',
			style: 'position:absolute;left:8px;top:102px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаДокумента',
			text: 'Дата документа:',
			style: 'position:absolute;left:8px;top:127px;width:97px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:810px;height:25px;',
			items:
			[
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:379px;width:810px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НалоговыйОрган',
			text: '',
			style: 'position:absolute;left:111px;top:153px;width:689px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Организация',
			text: '',
			style: 'position:absolute;left:111px;top:178px;width:689px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НомерДокумента',
			text: '',
			style: 'position:absolute;left:111px;top:102px;width:691px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ДатаДокумента',
			text: '',
			style: 'position:absolute;left:111px;top:127px;width:691px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:243px;width:794px;height:128px;',
			height: 128,width: 794,
			columns:
			[
				{
					text:'Имя',
					width:'533',
				},
				{
					text:'Размер (в байтах)',
					width:'108',
				},
				{
					text:'Тип',
					width:'147',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:219px;width:792px;height:24px;',
			items:
			[
				{
					text:'Открыть',
				},
				{
					text:'Выгрузить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:794px;height:44px;',
			height: 44,width: 794,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:794px;height:36px;',
			height: 36,width: 794,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:111px;top:77px;width:691px;height:19px;',
		},
	]
});