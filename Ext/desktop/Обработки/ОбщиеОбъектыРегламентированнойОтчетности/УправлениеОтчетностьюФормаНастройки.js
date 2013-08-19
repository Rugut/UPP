Ext.require(['Данные.Обработки.ОбщиеОбъектыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.УправлениеОтчетностьюФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:446px;height:497px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'fieldset',
			title: 'Прочие общие настройки',
			style: 'position:absolute;left:8px;top:357px;width:430px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автосохранение каждые ',
			style: 'position:absolute;left:19px;top:383px;width:148px;height:15px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИнтервалАвтосохранения',
			style: 'position:absolute;left:169px;top:381px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМинут',
			text: 'минут',
			style: 'position:absolute;left:228px;top:383px;width:39px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Настройки формы управления отчетностью',
			style: 'position:absolute;left:8px;top:12px;width:430px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать "пустые" документы в журнале выгрузки',
			style: 'position:absolute;left:19px;top:63px;width:303px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Фильтровать дерево видов отчетов при установленном отборе по периоду',
			style: 'position:absolute;left:19px;top:89px;width:414px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Проверять соотношения при печати из журнала',
			style: 'position:absolute;left:19px;top:37px;width:264px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:118px;width:430px;height:100px;',
			height: 100,width: 430,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Настройки календаря',
			style: 'position:absolute;left:0px;top:0px;width:430px;height:16px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИнтервалНапоминаний',
			style: 'position:absolute;left:218px;top:77px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоп',
			text: 'дня (ей) до наступления.',
			style: 'position:absolute;left:282px;top:81px;width:126px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НапоминатьОСобытияхЕжедневноЗа',
			text: 'Напоминать о событиях ежедневно за',
			style: 'position:absolute;left:11px;top:77px;width:207px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не отображать ближайшие события',
			style: 'position:absolute;left:11px;top:25px;width:207px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Запоминать выбранный период',
			style: 'position:absolute;left:11px;top:51px;width:186px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Печать машиночитаемых форм',
			style: 'position:absolute;left:8px;top:227px;width:430px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДляНастройкиШаблонов1',
			text: 'Для настройки шаблонов печати машиночитаемых форм нажмите ',
			style: 'position:absolute;left:19px;top:276px;width:341px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗдесь1',
			text: 'здесь',
			style: 'position:absolute;left:360px;top:275px;width:33px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: '.',
			style: 'position:absolute;left:392px;top:276px;width:5px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:251px;width:430px;height:16px;',
			height: 16,width: 430,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Установить',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДляНастройкиШаблонов2',
			text: 'Для установки компоненты печати машиночитаемых форм нажмите',
			style: 'position:absolute;left:11px;top:1px;width:353px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗдесьУстановкаКомпоненты',
			text: 'здесь',
			style: 'position:absolute;left:363px;top:1px;width:33px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: '.',
			style: 'position:absolute;left:395px;top:1px;width:5px;height:15px;',
		},
					]
				},
				{
					title:'Переустановить',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДляНастройкиШаблонов3',
			text: 'Для переустановки компоненты печати машиночитаемых форм нажмите',
			style: 'position:absolute;left:11px;top:1px;width:376px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗдесьПереустановкаКомпоненты',
			text: 'здесь',
			style: 'position:absolute;left:387px;top:0px;width:33px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: '.',
			style: 'position:absolute;left:419px;top:1px;width:5px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Оповещения',
			style: 'position:absolute;left:8px;top:303px;width:430px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Для настройки оповещений нажмите',
			style: 'position:absolute;left:19px;top:328px;width:194px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗдесьНастройкиМеханизмаОнлайнСервисовРО',
			text: 'здесь',
			style: 'position:absolute;left:215px;top:328px;width:33px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: '.',
			style: 'position:absolute;left:248px;top:328px;width:5px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:415px;width:430px;height:46px;',
			height: 46,width: 430,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Документооборот с контролирующими органами',
			style: 'position:absolute;left:0px;top:0px;width:430px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Для настройки параметров документооборота нажмите',
			style: 'position:absolute;left:11px;top:25px;width:290px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗдесьНастройкиДокументооборотаСФНС',
			text: 'здесь',
			style: 'position:absolute;left:302px;top:25px;width:33px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: '.',
			style: 'position:absolute;left:335px;top:25px;width:5px;height:15px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:472px;width:446px;height:25px;',
			dock: 'bottom',
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
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Открыть справку',
				},
			]
		},
	]
	});
});