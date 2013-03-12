Ext.define('Справочники.ТипыЦенНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:702px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Типы цен номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:686px;height:280px;',
			height: 280,width: 686,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'180',
				},
				{
					text:'Валюта цен',
					width:'80',
				},
				{
					text:'Расчет цен',
					width:'80',
				},
				{
					text:'Базовый тип цен',
					width:'200',
				},
				{
					text:'Наценка в %',
					width:'80',
				},
				{
					text:'НДС',
					width:'80',
				},
				{
					text:'Округлять до',
					width:'80',
				},
				{
					text:'Метод округления',
					width:'150',
				},
				{
					text:'Способ расчета цены',
					width:'150',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:702px;height:25px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Действие35',
				},
				{
					text:'Действие28',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'',
				},
				{
					text:'Действие20',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие30',
				},
				{
					text:'Действие13',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие26',
				},
				{
					text:'Действие31',
				},
				{
					text:'Действие19',
				},
				{
					text:'Действие14',
				},
				'-',
				'-',
				{
					text:'Действие32',
				},
				'-',
				'-',
				{
					text:'Действие27',
				},
				{
					text:'Действие25',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие22',
				},
				{
					text:'Действие34',
				},
				{
					text:'',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие17',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие18',
				},
				{
					text:'',
				},
				{
					text:'Действие29',
				},
				'-',
				{
					text:'Действие21',
				},
				{
					text:'Прайс-лист',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие33',
				},
				{
					text:'Действие23',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				'-',
				'-',
				{
					text:'',
				},
			]
		},
	]
});