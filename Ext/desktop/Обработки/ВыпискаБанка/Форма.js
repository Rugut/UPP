Ext.define('Обработки.ВыпискаБанка.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:676px;height:432px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Выписка банка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:407px;width:676px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:32px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:32px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Банковский счет:',
			style: 'position:absolute;left:8px;top:56px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации',
			style: 'position:absolute;left:106px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОплаты',
			style: 'position:absolute;left:106px;top:8px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата оплаты:',
			style: 'position:absolute;left:8px;top:8px;width:96px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:123px;width:660px;height:180px;',
			height: 180,width: 660,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Документ',
					width:'280',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Сумма прихода',
					width:'120',
				},
				{
					text:'Сумма расхода',
					width:'120',
				},
				{
					text:'ЧастичнаяОплата',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:99px;width:660px;height:24px;',
			items:
			[
				{
					text:'Установить пометки',
				},
				{
					text:'Снять пометки',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокНаНачалоДня',
			style: 'position:absolute;left:548px;top:308px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить только оплаченные',
			style: 'position:absolute;left:208px;top:8px;width:176px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Остаток на начало дня:',
			style: 'position:absolute;left:422px;top:308px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПриходИтого',
			style: 'position:absolute;left:548px;top:332px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Приход:',
			style: 'position:absolute;left:422px;top:332px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаРасходИтого',
			style: 'position:absolute;left:548px;top:356px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Расход:',
			style: 'position:absolute;left:422px;top:356px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокНаКонецДня',
			style: 'position:absolute;left:548px;top:380px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Остаток на конец дня:',
			style: 'position:absolute;left:422px;top:380px;width:124px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:303px;width:124px;height:24px;',
			items:
			[
				{
					text:'Частичная оплата',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
	]
});