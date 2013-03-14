Ext.define('Документы.ПланДвиженияДенежныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:411px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'План движения денежных средств',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:359px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:359px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПланирования',
			text: 'Дата планирования (период-ть: квартал):',
			style: 'position:absolute;left:336px;top:57px;width:213px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПланирования',
			style: 'position:absolute;left:549px;top:57px;width:95px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:150px;width:636px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:174px;width:636px;height:108px;',
			height: 108,width: 636,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Вид движения',
					width:'100',
				},
				{
					text:'Статья движения денежных средств',
					width:'128',
				},
				{
					text:'Проект',
					width:'86',
				},
				{
					text:'Сумма',
					width:'86',
				},
				{
					text:'Контрагент',
					width:'100',
				},
				{
					text:'Вид операции',
					width:'159',
				},
				{
					text:'Договор контрагента',
					width:'118',
				},
				{
					text:'Сделка',
					width:'143',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:386px;width:652px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСценарий',
			text: 'Сценарий:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:424px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалюта',
			text: 'Валюта:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДенежныхСредств',
			style: 'position:absolute;left:549px;top:81px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вид денежных средств',
			style: 'position:absolute;left:336px;top:81px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоПриход',
			text: 'Итого поступления:',
			style: 'position:absolute;left:420px;top:287px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоРасход',
			text: 'Итого платежи:',
			style: 'position:absolute;left:420px;top:311px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоПоток',
			text: 'Чистый денежный поток: ',
			style: 'position:absolute;left:420px;top:335px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИтогоПлатежи',
			style: 'position:absolute;left:556px;top:311px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧДП',
			style: 'position:absolute;left:556px;top:335px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИтогоПоступления',
			style: 'position:absolute;left:556px;top:287px;width:88px;height:19px;',
		},
	]
});