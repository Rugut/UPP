Ext.define('Справочники.СтепениЗнанияЯзыка.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:444px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Степени знания языков',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:429px;height:220px;',
			height: 220,width: 429,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'26',
				},
				{
					text:'Наименование',
					width:'215',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:444px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие11',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Подбор из ОКИН',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие9',
				},
			]
		},
	]
});