Ext.define('Обработки.РасчетАвансовыхПлатежейПоЗемельномуНалогу.ФормаНастройкиЛьготы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:508px;height:442px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Налоговые льготы по земельному налогу',
	
	items:
	[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НеОблагаемаяНалогомСумма',
			style: 'position:absolute;left:351px;top:180px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'на установленную местным нормативным актом сумму:',
			style: 'position:absolute;left:30px;top:180px;width:316px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДоляНеОблагаемойНалогомПлощадиЧислитель',
			style: 'position:absolute;left:241px;top:104px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентУменьшенияСуммыНалога',
			style: 'position:absolute;left:128px;top:285px;width:52px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СниженнаяНалоговаяСтавка',
			style: 'position:absolute;left:62px;top:385px;width:52px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаУменьшенияСуммыНалога',
			style: 'position:absolute;left:103px;top:310px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаСуммаУменьшенияНалоговойБазы',
			text: 'руб.',
			style: 'position:absolute;left:477px;top:180px;width:23px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентУменьшенияСуммыНалога',
			text: '%',
			style: 'position:absolute;left:181px;top:285px;width:23px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентСниженнойНалоговойСтавки',
			text: '%',
			style: 'position:absolute;left:115px;top:385px;width:23px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаУменьшенияСуммыНалога',
			text: 'руб.',
			style: 'position:absolute;left:228px;top:310px;width:23px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодНалоговойЛьготыОсвобождениеОтНалогообложенияПоСтатье395',
			style: 'position:absolute;left:380px;top:79px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'по ст. 391 НК РФ на 10 000 рублей, код льготы:',
			style: 'position:absolute;left:30px;top:154px;width:265px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодНалоговойЛьготыУменьшениеНалоговойБазыПоСтатье391',
			style: 'position:absolute;left:301px;top:154px;width:120px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Льгота по налоговой базе',
			style: 'position:absolute;left:8px;top:8px;width:492px;height:17px;',
		},
		{
			xtype: 'fieldset',
			title: 'Льгота по сумме налога',
			style: 'position:absolute;left:8px;top:214px;width:492px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:417px;width:508px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДоляНеОблагаемойНалогомПлощадиЗнаменатель',
			style: 'position:absolute;left:336px;top:104px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДробь',
			text: '/',
			style: 'position:absolute;left:323px;top:104px;width:12px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Уменьшение суммы налога:',
			style: 'position:absolute;left:14px;top:236px;width:182px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Снижение налоговой ставки:',
			style: 'position:absolute;left:8px;top:337px;width:153px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Не применяется',
			style: 'position:absolute;left:14px;top:30px;width:398px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Освобождение от налогообложения в соответствии с местным нормативным актом',
			style: 'position:absolute;left:14px;top:54px;width:466px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Освобождение от налогообложения по ст. 395 НК РФ, код льготы:',
			style: 'position:absolute;left:14px;top:79px;width:363px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Доля не облагаемой налогом площади:',
			style: 'position:absolute;left:14px;top:104px;width:222px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Уменьшение налоговой базы:',
			style: 'position:absolute;left:14px;top:129px;width:398px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'не применяется',
			style: 'position:absolute;left:22px;top:260px;width:101px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'в процентах, на:',
			style: 'position:absolute;left:22px;top:285px;width:101px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'в размере:',
			style: 'position:absolute;left:22px;top:310px;width:74px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'не применяется',
			style: 'position:absolute;left:22px;top:360px;width:101px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'до:',
			style: 'position:absolute;left:22px;top:385px;width:36px;height:19px;',
		},
			]
		},
	],
	dockedItems:
	[
	]
});