Ext.require(['Данные.Отчеты.МониторЭффективности'], function () 
{
	Ext.define('Отчеты.МониторЭффективности.КонструкторНастройкиПоказателя',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:446px;height:366px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка показателя монитора эффективности',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:54px;width:430px;height:279px;',
			height: 279,width: 430,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись100',
			text: 'Вид показателя монитора эффективности',
			style: 'position:absolute;left:6px;top:6px;width:418px;height:36px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Показатель, содержащий поля: "Текущее значение", "Значение предыдущего периода", "Изменение %", "Изменение (абс)"',
			style: 'position:absolute;left:49px;top:72px;width:375px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'Надпись103',
			text: 'Показатель, содержащий, кроме полей стандартного показателя, поля: "План", "% Выполнения", "Отклонение %", "Отклонение (абс)"',
			style: 'position:absolute;left:49px;top:132px;width:375px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'Надпись104',
			text: 'Показатель, содержащий поля: "Текущее значение", "Прогноз"',
			style: 'position:absolute;left:49px;top:195px;width:335px;height:18px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Стандартный показатель',
			style: 'position:absolute;left:34px;top:51px;width:149px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'План-факт',
			style: 'position:absolute;left:34px;top:111px;width:74px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'План (прогноз)',
			style: 'position:absolute;left:34px;top:174px;width:282px;height:19px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Текущее значение:',
			style: 'position:absolute;left:6px;top:99px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Начало периода:',
			style: 'position:absolute;left:6px;top:123px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НачалоТекущегоПериода',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:123px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТекущееЗначение',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:99px;width:279px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Конец периода:',
			style: 'position:absolute;left:6px;top:147px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонецТекущегоПериода',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:147px;width:279px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Предыдущее значение:',
			style: 'position:absolute;left:6px;top:204px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Начало периода:',
			style: 'position:absolute;left:6px;top:228px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НачалоПредыдущегоПериода',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:228px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПредыдущееЗначение',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:204px;width:279px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Конец периода:',
			style: 'position:absolute;left:6px;top:252px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонецПредыдущегоПериода',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:252px;width:279px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИсточникДанныхЗначениеПоказателя',
			text: 'Набор данных:',
			style: 'position:absolute;left:6px;top:48px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаборДанныхЗначениеПоказателя',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:48px;width:279px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись109',
			text: 'Текущее значение:',
			style: 'position:absolute;left:6px;top:78px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись110',
			text: 'Начало периода:',
			style: 'position:absolute;left:6px;top:102px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НачалоТекущегоПериода1',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:102px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТекущееЗначение1',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:78px;width:279px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись112',
			text: 'Конец периода:',
			style: 'position:absolute;left:6px;top:126px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонецТекущегоПериода1',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:126px;width:279px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИсточникДанныхЗначениеПоказателя1',
			text: 'Набор данных:',
			style: 'position:absolute;left:6px;top:48px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаборДанныхЗначениеПоказателяПрогноз',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:48px;width:279px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Текущий период',
			style: 'position:absolute;left:6px;top:75px;width:418px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Значение (план):',
			style: 'position:absolute;left:6px;top:78px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Начало периода:',
			style: 'position:absolute;left:6px;top:102px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НачалоПериодаПлан',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:102px;width:279px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Конец периода:',
			style: 'position:absolute;left:6px;top:126px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонецПериодаПлан',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:126px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеПлан',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:78px;width:279px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаборДанныхЗначениеПлан',
			width: 279,
			height: 19,
			style: 'position:absolute;left:129px;top:48px;width:279px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИсточникДанныхЗначениеПлан',
			text: 'Набор данных:',
			style: 'position:absolute;left:6px;top:48px;width:102px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодсказка',
			text: 'НадписьПодсказка',
			style: 'position:absolute;left:45px;top:8px;width:393px;height:43px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:341px;width:446px;height:25px;',
			width: 446,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Назад',
					tooltip:'9d8eaa0-9736-4e6a-9915-67b2bc9dd4c',
				},
				{
					text:'Далее',
					tooltip:'c372f01-bb92-497a-ab6e-9e5a59b130e',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});