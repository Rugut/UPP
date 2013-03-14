Ext.define('Обработки.ТекущиеСделки.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:430px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Текущие сделки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Настроить интервал',
				},
				'-',
				{
					text:'Настроить отбор',
				},
				{
					text:'Отбор по текущему значению',
				},
				{
					text:'Снять отбор',
				},
				'-',
				'-',
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Анализ сделки',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Настроить интервал',
				},
				'-',
				{
					text:'Настроить отбор',
				},
				{
					text:'Отбор по текущему значению',
				},
				{
					text:'Снять отбор',
				},
				'-',
				'-',
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыбКонтрагент',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:58px;width:764px;height:363px;',
			height: 363,width: 764,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Дата',
					width:'73',
				},
				{
					text:'Номер',
					width:'82',
				},
				{
					text:'Вид документа',
					width:'114',
				},
				{
					text:'Вид операции',
					width:'99',
				},
				{
					text:'Контрагент',
					width:'95',
				},
				{
					text:'Сумма (остаток)',
					width:'103',
				},
				{
					text:'Сумма сделки',
					width:'110',
				},
				{
					text:'Валюта',
					width:'49',
				},
				{
					text:'Договор',
					width:'102',
				},
			]
		},
	]
});