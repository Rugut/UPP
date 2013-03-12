Ext.define('Справочники.РегистрацияВИФНС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:548px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Регистрация в ИФНС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:532px;height:259px;',
			height: 259,width: 532,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'48',
				},
				{
					text:'КПП',
					width:'84',
				},
				{
					text:'Организация',
					width:'350',
				},
				{
					text:'Наименование ИФНС',
					width:'160',
				},
				{
					text:'Полное наименование ИФНС',
					width:'176',
				},
				{
					text:'Представитель',
					width:'160',
				},
				{
					text:'Документ представителя',
					width:'160',
				},
				{
					text:'Уполномоченное лицо представителя',
					width:'160',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:548px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'',
				},
			]
		},
	]
});